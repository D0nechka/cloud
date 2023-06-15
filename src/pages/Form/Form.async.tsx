import React from "react";

const FormAsync = React.lazy(() => import("./Form"));

export {
  FormAsync as Form
};