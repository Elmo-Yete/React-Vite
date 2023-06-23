export default function Button(props) {
  const content = props.content;
  return (
    <div className="ancorWrapper">
      <a className="button">{content}</a>
    </div>
  );
}
