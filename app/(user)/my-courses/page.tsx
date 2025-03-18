import { getEnrolledCourses } from '@/sanity/lib/courses/getEnrolledCourses'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getCourseProgress } from '@/sanity/lib/courses/getCourseProgress'

async function MyCoursesPage() {
    const user = await currentUser()

    if (!user?.id) {
        return redirect("/")
    }

    const enrolledCourses = await getEnrolledCourses(user.id);

    const coursesWithProgress = await Promise.all(
        enrolledCourses.map(async ({ course }) => {
            if (!course) return null;
            const progress = await getCourseProgress(user.id, course._id);
            return {
                course,
                progress: progress.courseProgress,
            }
        })
    )
  return (
    <div>MyCoursesPage</div>
  )
}

export default MyCoursesPage