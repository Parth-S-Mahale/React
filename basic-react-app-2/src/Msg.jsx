export default function Msg({ userName, textColor }) {
  return (
      <h1 style={{color: textColor}}>Hello, {userName}</h1>
  );
}
