export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isAge = age && `I am ${age}`;
  const gender = sex === 'm' ? 'wife' : 'husband';
  const married = isMarried
    ? `${partnerName} is my ${gender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age"> {isAge} </p>
      <p className="Person__partner">{married}</p>
    </section>
  );
};
