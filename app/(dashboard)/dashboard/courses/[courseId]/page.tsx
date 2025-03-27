import getCourseById from "@/sanity/lib/courses/getCourseById"
import { redirect } from "next/navigation"

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>
}

async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = await getCourseById(courseId)

  if (!course) {
    return redirect("/")
  }


  if (course.modules?.[0].lessons?.[0]?._id) {
    return redirect(
      `dashboard/courses/${courseId}/lessons/${course.modules[0].lessons[0]._id}`
    )
  }
  return (
    <div>CoursePage</div>
  )
}

export default CoursePage