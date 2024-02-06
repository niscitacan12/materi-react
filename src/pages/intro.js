import React from 'react';

function Intro(props) {
  return (
    <>
      <p>
        <strong style={{ fontWeight: 'bold' }}>Nama :</strong> {props.nama}
      </p>
      <p>
        <strong style={{ fontWeight: 'bold' }}>Sekolah :</strong> {props.sekolah}
      </p>
      <p>
        <strong style={{ fontWeight: 'bold' }}>Kelas :</strong> {props.kelas}
      </p>
    </>
  );
}

export default Intro;