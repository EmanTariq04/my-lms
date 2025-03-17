"use server"

import stripe from "@/lib/stripe"
import baseUrl from "@/lib/baseUrl"
import getCourseById from "@/sanity/lib/courses/getCourseById"

export async function createStripeCheckout(courseId: string, userId: string) {
    const course = await getCourseById(courseId)
}