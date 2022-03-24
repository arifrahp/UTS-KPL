const TABLE_BODY = "tabeldata";

function makelist(nik, name, jenkel, golongan, tunjangan, potongan, gajiakhir) {
  const textNIK = document.createElement("td");
  textNIK.innerText = nik;

  const textName = document.createElement("td");
  textName.innerText = name;

  const textJenKel = document.createElement("TD");
  textJenKel.innerText = jenkel;

  const textGolongan = document.createElement("TD");
  textGolongan.innerText = golongan;

  const textTunjangan = document.createElement("TD");
  textTunjangan.innerText = tunjangan;

  const textPotongan = document.createElement("TD");
  textPotongan.innerText = potongan;

  const textGaji = document.createElement("TD");
  textGaji.innerText = gajiakhir;

  const tableRow = document.createElement("tr");
  tableRow.classList.add("tableRow");
  tableRow.append(
    textNIK,
    textName,
    textJenKel,
    textGolongan,
    textTunjangan,
    textPotongan,
    textGaji
  );

  return tableRow;
}

function addData() {
  const nik = document.getElementById("inputnik").value;
  const firstname = document.getElementById("inputfirstname").value;
  const lastname = document.getElementById("inputlastname").value;
  const jenkel = document.getElementById("inputjenkel").value;
  const golongan = document.getElementById("inputgolongan").value;
  const tunjangan = document.getElementById("inputtunjangan").value;
  const potongan = document.getElementById("inputpotongan").value;

  const name = firstname.concat(" ", lastname);

  const dataList = document.getElementById(TABLE_BODY);

  const gajiakhir = hitunggaji(golongan, tunjangan, potongan);

  const data = makelist(
    nik,
    name,
    jenkel,
    golongan,
    tunjangan,
    potongan,
    gajiakhir
  );

  dataList.append(data);
}

function hitunggaji(golongan, tunjangan, potongan) {
  const igolongan = parseInt(golongan);
  const itunjangan = parseInt(tunjangan);
  const ipotongan = parseInt(potongan);

  let gaji;

  switch (igolongan) {
    case 1:
      gaji = 3000000 + itunjangan - ((3000000 + itunjangan) * ipotongan) / 100;
      break;

    case 2:
      gaji = 4000000 + itunjangan - ((4000000 + itunjangan) * ipotongan) / 100;
      break;

    case 3:
      gaji = 5000000 + itunjangan - ((5000000 + itunjangan) * ipotongan) / 100;
      break;

    case 4:
      gaji = 6000000 + itunjangan - ((6000000 + itunjangan) * ipotongan) / 100;
      break;

    default:
      break;
  }
  return gaji;
}

const submitForm = document.getElementById("form");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addData();
});
