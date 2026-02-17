const url = "https://localhost:8000/api/v1/users/"; //Apunta a laravel

export const getUsers = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw new Error("Error al obtener los usuarios");
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw new Error("Error al obtener el usuario");
  }
};

export const createUser = async (userData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error al crear el usuario: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw new Error(`Error al crear el usuario`);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar el usuario: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw new Error(`Error al eliminar el usuario`);
  }
};

export const putUser = async (id, userData) => {
  try {
    const response = await fetch(`${url}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`Error al actualizar el usuario: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw new Error(`Error al actualizar el usuario`);
  }
};
