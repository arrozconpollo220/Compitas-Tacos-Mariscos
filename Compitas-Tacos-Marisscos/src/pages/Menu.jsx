

function Menu() {
  return (
    <div>
      <div>
        <h1>Menu</h1>
        <h2>Check out our amazing menu!</h2>
        <ul style={{ listStyleType: 'none' }} className="mariscos">
          <h3>MARISCOS</h3>
          <li>CEVICHE * ....................................................$18</li>
          <p>-SHRIMP (RAW) LIME, TOMATO, CUCUMBER, RED ONION, CILANTRO, AVOCADO</p>
          <br></br>

          <li>MANGO CEVICHE * ..............................................$20</li>
          <p>-SHRIMP (RAW) LIME, TOMATO, CUCUMBER, RED ONION, CILANTRO, MANGO</p>
          <br></br>
          
          <li>CEVICHE W/PULPO * ............................................$22</li>
          <p>-SHRIMP (RAW), LIME, OCTOPUS, TOMATIO, CUCUMBER, RED ONION, CILANTRO</p>
          <br></br>

          <li>AGUACHILE ROJO * .............................................$20</li>
          <p>-SHRIMP (RAW), SPICY RED SAUCE, LIME, RED ONION, CUCUMBER, AVOCADO</p>
          <br></br>

          <li>AGUACHILE VERDE * ............................................$20</li>
          <p>-SHRIMP (RAW) SPICY GREEN SAUCE, LIME, ONION, CUCUMBER, AVOCADO</p>
          <br></br>

          <li>AGUACHILE MIXTO * ............................................$24</li>
          <p>-SHRIMP (RAW), GREEN OR RED SAUCE, LIME, COOKED SHRIMP, OCTOPUS, ONION, CUCUMBER, AVOCADO</p>
          <br></br>

          <li>COCTEL DE CAMARON ............................................$18</li>
          <p>-SHRIMP COCKTAIL, COOKED SHRIMP, LIME, RED ONION, CUCUMBER, TOMATO, CILANTRO, AVOCADO, <br></br>
          SALSA MARISQUERA, KETCHUP, CLAMATO (SERVED COLD OR WARM)</p>
          <br></br>

          <li>COCTEL W/PULPO ...............................................$22</li>
          <p>-SHRIMP COCKTAIL, COOKED SHRIMP, OCTOPUS, LIME, RED ONION, CUCUMBER, TOMATIO, CILANTRO, <br></br>
          AVOCADO, SLSA MARISQUERA, KETCHUP, CLAMATO (SERVED COLD OR WARM)</p>
          <br></br>

          <li>TOSTICEVICHE * ...............................................$10</li>
          <p>-TOSTITOS CHIPS LOADED W/CEVICHE</p>
          <br></br>
        </ul>

        <ul style={{ listStyleType: 'none' }} className="tacos">
          <h3>TACOS</h3>

          <li>SHRIMP TACO....................................................$5</li>
          <p>-BEER BATTERED SHRIMP, CHEESE, CABBAGE, PICO DE GALLO, CHIPOTLE MAYO</p>
          <br></br>

          <li>CARNE ASADA TACO...............................................$4</li>
          <p>-GRILLED STEAK, CILANTRO, ONION, GUACAMOLE (ADD CHEESE $.50)</p>
          <br></br>

          <li>POLLO ASADO TACO...............................................$4</li>
          <p>-GRILLED CHICKEN, CILANTRO, ONION, GUACAMOLE (ADD CHEESE $0.50)</p>
          <br></br>
        </ul>
        
        <ul style={{ listStyleType: 'none' }} className="drinks" >
        <h3>DRINKS</h3>

        <li>COKE (CAN) ......................................................$2</li>
        <br></br>

        <li>SPRITE (CAN) ....................................................$2</li>
        <br></br>

        <li>BOTTLED WATER ...................................................$1</li>
        <br></br>
        </ul>
      </div>
    </div>
  );
}

export default Menu;