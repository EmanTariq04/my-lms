import { Course, GetCoursesQueryResult } from "@/sanity.types"
import Link from "next/link";

interface CourseCardPages {
    course: GetCoursesQueryResult[number];
    progress?: number;
    href: string;
}

function CourseCard({ course, progress, href}: CourseCardPages) {
  return (
    <Link href={href} prefetch={false} className="group hover:no-underline flex"><div>CourseCard</div></Link>
  )
}

export default CourseCard