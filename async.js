const f = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1100);
  });
};

const testAsync = async () => {
  const t = await f('weizhen');
  console.log(t);
};

testAsync();

const e = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
};

const errAsync = async () => {
  try {
    const t = await e();
    // console.log(t);
  } catch (err) {
    console.log(err);
  }
};

errAsync();
