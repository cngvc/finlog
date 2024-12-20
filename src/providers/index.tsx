import { combine } from "@/providers/combine";
import { ClerkProvider } from "@clerk/nextjs";
import React, { Suspense } from "react";
import { Toaster } from "sonner";
import QueryProvider from "./query.provider";
import { SheetProvider } from "./sheet.provider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  combine(
    [_basesProvider],
    [_suspense, _queryProvider, _clerkProvider],
    children,
  );

const _queryProvider = (props: { children?: React.ReactNode }) => (
  <QueryProvider>{props.children}</QueryProvider>
);

const _clerkProvider = (props: { children?: React.ReactNode }) => (
  <ClerkProvider>{props.children}</ClerkProvider>
);

const _suspense = (props: { children?: React.ReactNode }) => (
  <Suspense>{props.children}</Suspense>
);

const _basesProvider = () => (
  <>
    <SheetProvider />
    <Toaster />
  </>
);

export default Providers;
