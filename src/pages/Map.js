import React from 'react'
import { Table } from 'react-bootstrap';

function Map() {

    const makanans = [
        {
          nama: "Soto",
          harga: 12000,
        },
        {
          nama: "Bakso",
          harga: 10000,
        },
        {
          nama: "Mie Ayam",
          harga: 7000,
        },
        {
          nama: "Nasi Goreng",
          harga: 15000,
        },
      ];

    // Return
    const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0)

  return (
    <div className="text-center">
      <h4 className="mb-4">Daftar Makanan</h4>
      <Table striped bordered hover>
        <thead style={{ backgroundColor: '#337ab7' }}>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans
            .filter((makanan) => makanan.harga < 11000)
            .map((makanan, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.harga}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Map