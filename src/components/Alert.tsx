interface prop2 {
  onCloseEvent: () => void;
}
const Alert = ({ onCloseEvent }: prop2) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      Alert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onCloseEvent}
      ></button>
    </div>
  );
};

export default Alert;
