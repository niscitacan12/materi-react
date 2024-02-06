import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function Detail() {

    // perabotan
    const perabotans = [
        {
        nama: "Mixer",
        detail: "Alat yang digunakan untuk membuat kue dan kapasitas rumahan. Dilengkapi dengan 2 pilihan untuk mengaduk dan akan membuat anda lebih cepat dan praktis dalam membuat kue.",
        harga: "52.000",
        },
        {
        nama: "Pembersih Lantai",
        detail: "Dengan alat pembersih lantai ini akan membuat mengepel lebih mudah, memiliki daya serap yang tinggi dan tidak mudah rontok, dan memiliki gagang yang alumunium jadi lebih kuat dan tahan lama.",
        harga: "100.0000",
        },
        {
        nama: "Blender",
        detail: "Alat ini memiliki kekuatan powerfull dan mulifungsi, blender ini juga super cepat. Untuk menggiling bumbu kering, bumbu basah, daging, dan juga bisa untuk membuat jus buah.",
        harga: "255.0000",
        },
        {
        nama: "Panci",
        detail: "Panci ini berbentuk alumunium, berkualitas dan tebal dengan ada gagangnya. Dilengkapi dengan penutup panci nya dan bisa digunakan untuk berbagai memasak hidangan yang mudah dan praktis.",
        harga: "60.000",
        },
        {
        nama: "Magicom",
        detail: "Magicom ini untuk menanak nasi supaya bisa dimakan, magicom ini juga bisa untuk memasak sayur, mengukus, merebus, hingga dapat untuk membuat kue dengan magicom ini. Magicom ini bisa untuk menjaga kehangatan masakan",
        harga: "182.000",
        },
    ];

    // elektronik
    const elektroniks = [
        {
        nama: "Laptop",
        detail: "Laptop ini didesain dengan semenarik mungkin, juga bisa untuk memenuhi kebutuhan belajar hingga berbagai bidang. Dengan kualitas premium juga dengan kelebihan  dan spesifiknya.",
        harga: "7.899.000",
        },
        {
        nama: "Kamera",
        detail: "Kamera ini dilengkapi memori integral untuk kecepatan lebih jauh, ini bagus untuk memeriksa detail dan fokus. Dapat memperbesar subjek, membidik close-up.",
        harga: "2.000.000",
        },
        {
        nama: "Komputer",
        detail: "Komputer ini dilengkapi dengan PC nya juga yang dapat menyimpan dan menerima perangkat dan diproses datanya melalui PC ini sendiri. Ini masih bagus dan bisa digunakan.",
        harga: "1.500.000",
        },
        {
        nama: "Mesin Fotocopy",
        detail: "Mesin Cuci memiliki kapasitas 200 lembar, dapat mengeprint, scan, send. Spesifikasi standar bisa untuk usaha.",
        harga: "22.000.000",
        },
        {
        nama: "Kipas",
        detail: "Kipas menghasilkan angin lebih kencang di desain secara esklusif mudah dioperasikan dengan daya listrik, dapat juga untuk mengusir nyamuk.",
        harga: "129.000",
        },
    ];

    // alat tulis
    const alatTulis = [
        {
        nama: "Tas",
        detail: "Ada beberapa koleksi tas, ini ada tas selempang dengan rantai untuk dipegang. Untuk wanita.",
        harga: "48.000",
        },
        {
        nama: "Buku",
        detail: "Buku ini berukuran F4 buku tulis dengan lembar 38 lembar, cocok untuk anak sekolah. Dengan gambar sampul yang canti-cantik dengan kualitas terbaik.",
        harga: "30.000",
        },
        {
        nama: "Pensil",
        detail: "Pensil dengan kualitas terbaik dan original cocok untuk ujian, menulis, menggambar, atau juga bisa untuk membuat sketsa dengan pensil ini.",
        harga: "33.000",
        },
        {
        nama: "Penggaris",
        detail: "Penggaris alat untuk mengukur, penggaris besi dengan panjang 30 cm di desain dengan detail angka dan warnanya yang bagus.",
        harga: "10.000",
        },
        {
        nama: "Penghapus",
        detail: "Penghapus dengan akurasi tinggi hapusan, ini juga penghapus mekanik dengan detail grafis original.",
        harga: "16.000",
        },
    ];

    // button berhasil
    const handleClick = () => {
      alert("Pesanan anda sedang diproses, silahkan tunggu beberapa hari kedepan!!!");
    };
    
    return (
        <div> 
          {/* perabotan */}
          <Card className="mb-4">
            <Card.Body>
              <h2 className="mb-4">Barang Perabotan</h2>
              <Table striped bordered hover responsive="md">
               <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {perabotans.map((barang, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{barang.nama}</td>
                      <td>{barang.detail}</td>
                      <td>{barang.harga}</td>
                      <td>
                        <div>
                          <button onClick={handleClick}>Pesan</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
    
          {/* elektronik */}
          <Card className="mb-4">
            <Card.Body>
              <h2 className="mb-4">Barang Elektronik</h2>
              <Table striped bordered hover responsive="md">
               <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {elektroniks.map((barang, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{barang.nama}</td>
                      <td>{barang.detail}</td>
                      <td>{barang.harga}</td>
                      <td>
                        <div>
                          <button onClick={handleClick}>Pesan</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
    
          {/* alat tulis */}
          <Card>
            <Card.Body>
              <h2 className="mb-4">Peralatan Alat Tulis</h2>
              <Table striped bordered hover responsive="md">
               <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Keterangan</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {alatTulis.map((barang, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{barang.nama}</td>
                      <td>{barang.detail}</td>
                      <td>{barang.harga}</td>
                      <td>
                        <div>
                          <button onClick={handleClick}>Pesan</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
    );
}

export default Detail