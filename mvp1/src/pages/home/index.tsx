import ProtectedRoute from "../../components/ProtectedRoute";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Index = () => {
  const AppDynamic = dynamic(
    () => import("../../components/HomePage").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute>
            <AppDynamic />
        </ProtectedRoute>
      </Suspense>
    </>
  );
};

export default Index;