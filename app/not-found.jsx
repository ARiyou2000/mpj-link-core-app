import ErrorPageBody from "@/components/ErrorPageBody";

export default function NotFound() {
  return (
    <ErrorPageBody
      code={404}
      title={"صفحه مورد نظر یافت نشد!"}
      // description={"به خانه برگردید و مجددا تلاش کنید."}
    />
  );
}
