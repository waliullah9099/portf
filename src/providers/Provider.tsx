import Cursor from "@/components/ui/Cursor";
import ScrollBar from "@/components/ui/ScrollBar";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "../redux/features/feathers/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <Toaster position="bottom-left" />
        <ScrollBar />
        <Cursor />
      </Provider>
    </>
  );
};

export default Providers;
