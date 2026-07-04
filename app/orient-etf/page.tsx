import { Navbar } from "./components/navbar/navbar";
import { SubjectsForm } from "./components/subjects_form/subjects_form";

export default async function Home() {
  
  return (
    <section className="flex flex-col justify-center items-center">
      <Navbar />
      <hgroup className="text-center">
        <h1 className="text-4xl font-bold mt-8">
          QUIZ: Qual è la magistrale che più fa per te?
        </h1>
        <h2 className="text-lg text-gray-600 mt-4">
          Quanto vorresti approfondire gli argomenti visti in queste materie?
        </h2>
      </hgroup>
      <SubjectsForm />
    </section>
  );
}
