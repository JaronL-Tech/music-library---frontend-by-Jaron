import axios from "axios";

const DeleteButton = () => {
  // try {
  //     const response = await axios.delete(
  //       "https://localhost:7030/api/Song",
  //       formData
  //     );
  //   } catch (error) {
  //     console.warn("Error submitting new song form", error);
  //     if (response.status === 201) {
  //       onNewSong();
  //     }
  //   }
  return <button>Delete</button>;
};

export default DeleteButton;
