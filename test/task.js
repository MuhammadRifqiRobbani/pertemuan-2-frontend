const { users, all, store, update, destroy } = require("../task");

describe("kak ini ngejalani array pengguna objek", () => {
  test("pengguna ini  harus berupa susunan objek", () => {
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining({})])
    );
  });

  test("pengguna seharusnya memiliki 5 data", () => {
    expect(users.length).toBeGreaterThanOrEqual(5);
  });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${name ?? "item"} kak ini harus berupa objek`, () => {
        expect(typeof user).toBe("object");
      });
    });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${
        name ?? "name"
      } ini harus memiliki properti nama, umur, dan jurusan`, () => {
        expect(user).toHaveProperty("nama");
        expect(user).toHaveProperty("umur");
        expect(user).toHaveProperty("jurusan");
      });
    });
});

describe("kak ini  ngejalani semua fungsi berjalan", () => {
  test("semua fungsi harus bisa dipanggil", () => {
    expect(all()).toBeUndefined();
  });
});

describe("kak ini ngejalani toko fungsi", () => {
  const user = {
    nama: "Sabiq",
    umur: 20,
    jurusan: "Informatics",
  };

  test("fungsi ini di buat harus bisa dipanggil", () => {
    expect(store(user)).toBeUndefined();
  });

  test("fungsi ini di buat harus bisa menambahkan pengguna baru kak", () => {
    const lengthOfOldUsers = users.length;
    store(user);
    const lengthOfNewUsers = users.length;

    expect(lengthOfNewUsers).toBeGreaterThan(lengthOfOldUsers);
  });
});

describe("kak ini ngejalani fungsi edit", () => {
  test("fungsi edit ini harus bisa dipanggil", () => {
    const index = 1;
    const user = {
      name: "Isfa",
      age: 23,
      major: "English",
    };

    expect(update(index, user)).toBeUndefined();
  });

  test("fungsi edit ini harus bisa mengedit pengguna", () => {
    const index = 1;
    const user = {
      name: "Muh Isfani Ghiyath",
      age: 20,
      major: "Software Engineer",
    };

    const oldUser = users[index];
    update(index, user);
    const newUser = users[index];

    expect(newUser).not.toEqual(oldUser);
  });
});

describe("kak ini ngejalani sebuah fungsi menghancurkan", () => {
  const index = 2;

  test("fungsi menghancurkan ini harus bisa dipanggil kak", () => {
    expect(destroy(index)).toBeUndefined();
  });

  test("function destroy harus bisa menghapus user", () => {
    const lengthOfOldUsers = users.length;
    destroy(index);
    const lengthOfNewUsers = users.length;

    expect(lengthOfNewUsers).toBeLessThan(lengthOfOldUsers);
  });
});
