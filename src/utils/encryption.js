import crypto from "browser-crypto";

const secret = process.env.REACT_APP_SECRET_INIT;
const initVector = process.env.REACT_APP_INIT_VECTOR;

export const encrypt = (mnemonic) => {
  const cipher = crypto.createCipheriv("aes256", secret, initVector);

  mnemonic = crypto.Buffer.from(mnemonic);

  const mnemonic_e = crypto.Buffer.concat([
    cipher.update(mnemonic),
    cipher.final()
  ]);

  // const mnemonic_e =
  //   cipher._update(mnemonic, "utf8", "hex") + cipher._final("hex");

  return mnemonic_e;
};

encrypt("hello world");

export const decrypt = (encrypted) => {
  let decipher = crypto.createDecipheriv("aes256", secret, initVector);
  // encrypted = crypto.Buffer.from(encrypted);
  let word = crypto.Buffer.concat([
    decipher.update(encrypted),
    decipher.final()
  ]);
  // console.log("dangerous wallet =========");
  // console.log(word);
  // let word =
  //   decipher.update(encrypted.toString(), "hex", "utf8") +
  //   decipher.final("utf8");

  return word.toString("utf8");
};
