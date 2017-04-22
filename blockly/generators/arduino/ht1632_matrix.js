goog.provide('Blockly.Arduino.ht1632_matrix');

goog.require('Blockly.Arduino');

Blockly.Arduino.ht1632_matrix_begin = function() {
  Blockly.Arduino.definitions_['define_adafruit_gfx'] = '#include "Adafruit_GFX.h"\n';
  Blockly.Arduino.definitions_['define_adafruit_HT1632'] = '#include "Adafruit_HT1632.h"\n';
  var ht_data = this.getFieldValue("HT_DATA");
  var ht_cs = this.getFieldValue("HT_CS");
  var ht_wr = this.getFieldValue("HT_WR");
  Blockly.Arduino.definitions_['define_HT1632'] = 'Adafruit_HT1632LEDMatrix HTmatrix = Adafruit_HT1632LEDMatrix('+ht_data+', '+ht_wr+', '+ht_cs+');\n';
  Blockly.Arduino.setups_['setup_matrix'] = 'HTmatrix.begin(ADA_HT1632_COMMON_16NMOS);\n';
  var code = "";
  return "";
};

Blockly.Arduino.ht1632_matrix_fill = function() {
  var code = "HTmatrix.fillScreen();\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_clear = function() {
  var code = "HTmatrix.clearScreen();\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_write = function() {
  var code = "HTmatrix.writeScreen();\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '""'
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || 0
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || 0
  var code = "HTmatrix.setCursor("+x+", "+y+");\n";
  code += "HTmatrix.print("+ content + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_setcursor = function() {
  var col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var row = Blockly.Arduino.valueToCode(this, 'ROW', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var code = "matrix.setCursor("+ col + "," + row + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextsize = function() {
  var size = this.getFieldValue('SIZE');
  var code = "matrix.setTextSize("+ size + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextcolor = function() {
  var color = this.getFieldValue('COLOR');
  var code = "matrix.setTextColor(" + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_settextwrap = function() {
  var bool = (this.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  var code = "matrix.setTextWrap("+bool + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawpixel = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawPixel(" + x + "," + y + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawcircle = function() {
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var d = Blockly.Arduino.valueToCode(this, 'D', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawCircle(" + x + "," + y + "," + d + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawrect = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawRect(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawline = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.drawLine(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_fillrect = function() {
  var x0 = Blockly.Arduino.valueToCode(this, 'X0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y0 = Blockly.Arduino.valueToCode(this, 'Y0', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var x1 = Blockly.Arduino.valueToCode(this, 'X1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var y1 = Blockly.Arduino.valueToCode(this, 'Y1', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var color = this.getFieldValue('COLOR');
  var code = "matrix.fillRect(" + x0 + "," + y0 + "," + x1 + "," + y1 + "," + color + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_setrotation = function() {
  var angle = this.getFieldValue('ANGLE');
  var code = "matrix.setRotation(" + angle + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_writedigitnum = function() {
  var pos = this.getFieldValue('POSITION');
  var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0'
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  var code = "matrix.writeDigitNum(" + pos + "," + num + "," + bool + ");\n";
  return code;
};

Blockly.Arduino.ht1632_matrix_drawcolon = function() {
  var bool = Blockly.Arduino.valueToCode(this, 'DOTS', Blockly.Arduino.ORDER_NONE) || 'false';
  var code = "matrix.drawColon("+ bool + ");\n";
  return code;
};
