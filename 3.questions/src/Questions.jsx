import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>FAQ</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};

export default Questions;
