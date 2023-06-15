import type { FC } from "react";
import { RoutesNames } from "src/shared/types/router";
import { Main, Form, NotFound } from "src/pages";

export const ListRoutes: Record<RoutesNames, FC>  = {
  [RoutesNames.MAIN]: Main,
  [RoutesNames.FORM]: Form,
  [RoutesNames.ANY]: NotFound
};
