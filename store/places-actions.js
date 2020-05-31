import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    // someFolder/myimage.jpg => ["someFolder", "myimage.jpg"] => final result is => myimage.jpg
    const fileName = image.siplit("/").pop();

    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({ type: ADD_PLACE, placeData: { title, image: newPath } });
  };
};
