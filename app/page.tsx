// Updated Home component (app/page.tsx or similar)
// Now imports the fixed SearchParamProps and uses async/await for compatibility

import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { SearchParamProps } from "@/types"; // Now properly importable

const Home = async ({ searchParams }: SearchParamProps) => {
  // Await searchParams to resolve the Promise
  const resolvedSearchParams = await searchParams;
  const isAdmin = resolvedSearchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
            priority
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="onboarding illustration"
        className="side-img max-w-[50%]"
        priority
      />
    </div>
  );
};

export default Home;
