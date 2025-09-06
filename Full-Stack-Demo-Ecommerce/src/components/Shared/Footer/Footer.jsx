import React from 'react'

function Footer() {
  return (
    <div>
      <section>
        <p className='text-center'>&copy; <a className="text-decoration-none text-muted"href='https://www.facebook.com/shajidul.kabir.5'>Shajedul Kabir Rafi</a> | {(new Date()).getFullYear()}</p>
      </section>
    </div>
  )
}

export default Footer
