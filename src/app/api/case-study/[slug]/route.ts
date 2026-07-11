import { NextRequest, NextResponse } from "next/server";
import { caseStudies } from "@/lib/data";

const PASSWORDS: Record<string, string> = {
  max: process.env.MAX_CASE_STUDY_PASSWORD ?? "ideate-max-2025",
};

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const expected = PASSWORDS[slug];
  const project = caseStudies.find((p) => p.slug === slug);

  if (!expected || !project?.locked) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const { password } = await req.json();
  if (typeof password !== "string" || password !== expected) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  return NextResponse.json({ project });
}
