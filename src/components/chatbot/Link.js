import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>مواقع أخري</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.facebook.com/Nahdamedicalcenter/"
                target="_blank"
              >
                موقع الفيس بوك
              </a>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  )
}

export default Link
