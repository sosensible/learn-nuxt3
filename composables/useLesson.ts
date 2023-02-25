import { StorageSerializers } from "@vueuse/core";
import { LessonWithPath } from "~~/types/course";

export default async (
  chapterSlug: string,
  lessonSlug: string
) => useFetchWithCache<LessonWithPath>(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);