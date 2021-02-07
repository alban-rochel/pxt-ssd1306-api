namespace Alban {

  const colCount = 128
  const rowCount = 64
  const rowByteCount = 64 / 8
  //const screenBufferSize = colCount * rowByteCount

  //let screenBuffer: Buffer

const SSD1306_SETCONTRAST = 0x81
    const SSD1306_SETCOLUMNADRESS = 0x21
    const SSD1306_SETPAGEADRESS = 0x22
    const SSD1306_DISPLAYALLON_RESUME = 0xA4
    const SSD1306_DISPLAYALLON = 0xA5
    const SSD1306_NORMALDISPLAY = 0xA6
    const SSD1306_INVERTDISPLAY = 0xA7
    const SSD1306_DISPLAYOFF = 0xAE
    const SSD1306_DISPLAYON = 0xAF
    const SSD1306_SETDISPLAYOFFSET = 0xD3
    const SSD1306_SETCOMPINS = 0xDA
    const SSD1306_SETVCOMDETECT = 0xDB
    const SSD1306_SETDISPLAYCLOCKDIV = 0xD5
    const SSD1306_SETPRECHARGE = 0xD9
    const SSD1306_SETMULTIPLEX = 0xA8
    const SSD1306_SETLOWCOLUMN = 0x00
    const SSD1306_SETHIGHCOLUMN = 0x10
    const SSD1306_SETSTARTLINE = 0x40
    const SSD1306_MEMORYMODE = 0x20
    const SSD1306_COMSCANINC = 0xC0
    const SSD1306_COMSCANDEC = 0xC8
    const SSD1306_SEGREMAP = 0xA0
    const SSD1306_CHARGEPUMP = 0x8D
    const chipAdress = 0x3C

    function command_1(cmd: number) {
        let buf = pins.createBuffer(2)
        buf[0] = 0x00
        buf[1] = cmd
        pins.i2cWriteBuffer(chipAdress, buf, false)
    }

    function command_2(cmd: number, arg_1: number) {
        command_1(cmd)
        command_1(arg_1)
    }

    function command_3(cmd: number, arg_1: number, arg_2: number) {
        command_1(cmd)
        command_1(arg_1)
        command_1(arg_2)
    }

  //% block="Test function"
  //% weight=3
  export function pouet() {
      let list: Array<number>

        command_3(SSD1306_SETCOLUMNADRESS, 0x00, colCount - 1)
        command_3(SSD1306_SETPAGEADRESS, 0x00, rowCount - 1)
        let data = pins.createBuffer(17);
        data[0] = 0x40; // Data Mode
        for (let i = 1; i < 17; i++) {
            data[i] = 0x00
        }
        // send display buffer in 16 byte chunks
        for (let i = 0; i < 10; i += 16) {
            pins.i2cWriteBuffer(chipAdress, data, false)
        }
  }

  //% block="coin coin $n"
  //% weight=2
  export function toto(n: number) {

  }

  function display(on_off: number)
  {
      if(on_off)
      {
          command_1(SSD1306_DISPLAYON)
      }
      else
      {
          command_1(SSD1306_DISPLAYOFF)
      }
  }

  export function init() {
      //display(0)



      //display(1)

      //screenBuffer = pins.createBuffer(screenBufferSize)
      //screenBuffer.fill(0)
  }


  //pouet();
}
