import { ButtonComponent } from "./components/ButtonComponent";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-[--bg-primary] ">
      <div>
        <ButtonComponent>Button</ButtonComponent>
      </div>
    </div>
  );
}
