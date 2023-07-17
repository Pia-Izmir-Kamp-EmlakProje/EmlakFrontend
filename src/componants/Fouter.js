import React, { Component } from 'react'

 class Fouter extends Component {
  render() {
    return (
      <>
      
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Emlak Sitesi. All rights reserved.
      </footer>

      </>
    )
  }
}
export default Fouter;
