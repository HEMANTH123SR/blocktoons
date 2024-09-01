"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DropZone } from "@/components/DropZone";
import { createImage, deleteImage } from "@/lib/appwrite/appwrite";

const WebToonSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author name is required"),
  status: z.enum(["Ongoing", "Completed", "Cancelled"]),
  coverImage: z.string().optional(),
  backgroundImage: z.string().optional(),
  description: z
    .string()
    .min(100, "Description must be at least 100 characters")
    .max(500, "Description must not exceed 500 characters"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
});

type FormValues = z.infer<typeof WebToonSchema>;

const PublishPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState<FormValues>({
    title: "",
    author: "",
    status: "Ongoing",
    coverImage: "",
    backgroundImage: "",
    description: "",
    tags: [],
  });
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [backgroundImageFile, setBackgroundImageFile] = useState<File | null>(
    null
  );
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value as "Ongoing" | "Completed" | "Cancelled",
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setFormData((prev) => ({ ...prev, tags: tagsArray }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = WebToonSchema.parse(formData);

      // Upload cover image
      let coverImageId: string | undefined;

      if (coverImageFile) {
        const coverImageResult = await createImage(coverImageFile);
        if (coverImageResult.status === "success") {
          coverImageId = coverImageResult.id;
        } else {
          throw new Error("Failed to upload cover image");
        }
      } else {
        throw new Error("Cover image is required");
      }

      // Upload background image (if provided)
      let backgroundImageId: string | undefined;
      if (backgroundImageFile) {
        const backgroundImageResult = await createImage(backgroundImageFile);
        if (backgroundImageResult.status === "success") {
          backgroundImageId = backgroundImageResult.id;
        } else {
          // If background image upload fails, delete the cover image and throw an error
          await deleteImage(coverImageId as string);
          throw new Error("Failed to upload background image");
        }
      }

      const webToonData = {
        ...validatedData,
        coverImage: coverImageId,
        backgroundImage: backgroundImageId,
        createdBy: {
          username: user?.fullName || "",
          email: user?.primaryEmailAddress?.emailAddress || "",
          bio: "",
          profileImage: user?.imageUrl || "",
        },
        lastUpdated: new Date().toISOString(),
      };

      // Here you would send the data to your API
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: webToonData.title,
          author: webToonData.author,
          coverImage: webToonData.coverImage,
          backgroundImage: webToonData.backgroundImage,
          tags: webToonData.tags,
          status: webToonData.status,
          description: webToonData.description,
          isNew: true,
          isTrending: false,
          lastUpdated: "September 01, 2024",
          chapters: [],
          createdBy: webToonData.createdBy,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create WebToon");
      }

      console.log("WebToon data:", webToonData);
      // For now, just log the data and simulate a successful creation
      router.push(`${data.data._id}/dashboard/chapters`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors);
      } else if (error instanceof Error) {
        setErrors({ coverImage: [error.message] as any });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-semibold">
          You Have Not Signed In. Please sign in first.
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-4xl font-bold mb-8 text-[#E85C0D]">
        Publish Your WebToon
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="title"
            className="block text-xl font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 text-lg"
          />
          {errors.title && (
            <p className="mt-2 text-lg text-red-600">{errors.title}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-xl font-medium text-gray-700 mb-2"
          >
            Author
          </label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="mt-1 text-lg"
          />
          {errors.author && (
            <p className="mt-2 text-lg text-red-600">{errors.author}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-xl font-medium text-gray-700 mb-2"
          >
            Status
          </label>
          <Select onValueChange={handleStatusChange} value={formData.status}>
            <SelectTrigger id="status" className="text-lg">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ongoing">Ongoing</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-2">
            Cover Image
          </label>
          <DropZone
            multipleImage={false}
            setImage={setCoverImageFile}
            setMultipleImage={null}
          />
          {errors.coverImage && (
            <p className="mt-2 text-lg text-red-600">{errors.coverImage}</p>
          )}
        </div>

        <div>
          <label className="block text-xl font-medium text-gray-700 mb-2">
            Background Image (Optional)
          </label>
          <DropZone
            multipleImage={false}
            setImage={setBackgroundImageFile}
            setMultipleImage={null}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-xl font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 text-lg"
          />
          {errors.description && (
            <p className="mt-2 text-lg text-red-600">{errors.description}</p>
          )}
          <p className="mt-2 text-base text-gray-500">
            Minimum 100 characters, maximum 500 characters
          </p>
        </div>

        <div>
          <label
            htmlFor="tags"
            className="block text-xl font-medium text-gray-700 mb-2"
          >
            Tags
          </label>
          <Textarea
            id="tags"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={handleTagsChange}
            className="mt-1 text-lg"
            placeholder="Enter tags separated by commas"
          />
          {errors.tags && (
            <p className="mt-2 text-lg text-red-600">{errors.tags}</p>
          )}
          <p className="mt-2 text-base text-gray-500">{`Enter tags separated by commas, e.g., "action, fantasy, romance"`}</p>
        </div>

        <Button
          type="submit"
          className="w-full text-xl py-6 bg-[#E85C0D] hover:bg-[#D04C00]"
        >
          Publish WebToon
        </Button>
      </form>
    </div>
  );
};

export default PublishPage;
