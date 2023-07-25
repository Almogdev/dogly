  #include "Keyboard.h"

  // Joystick 
  #define Joy_X A1
  #define Joy_Y A2
  int Yval;
  int Xval;

  // Push Buttons
  #define RED 2
  #define GREEN 3
  #define BLUE 4
  #define YELLOW 5

  #define Push_BTN 4
  int Arr[Push_BTN] ={RED, GREEN, BLUE, YELLOW};

  void setup() {
  Serial.begin(9600);
  Keyboard.begin();

  for(int i=0; i<Push_BTN; i++){
  pinMode(Arr[i], INPUT_PULLUP);
  Serial.begin(9600);
  Keyboard.begin();
  }
  }

  void loop() {
  Yval = analogRead(Joy_Y);
  Xval = analogRead (Joy_X);
  Joy_Stick();
  Push_Buttons_SM();
  }


  void Joy_Stick(){
  if(Yval < 250){
  Serial.print("D IS: RIGHT");
  delay(500);
  Serial.print('\n');
  }
  else if(Xval > 750){
  Serial.print("S IS: DOWN");
  delay(500);
  Serial.print('\n');
  }

  if(Xval < 250){
  Serial.print("W IS: UP");
  delay(500);
  Serial.print('\n');
  }
  else if(Yval > 750){
  Serial.print("A IS: LEFT");
  delay(500);
  Serial.print('\n');
  }
  }


  void Push_Buttons_SM(){
  for(int i=0; i<Push_BTN; i++){
  switch(Arr[i]){

  case RED: 
  if(digitalRead(Arr[i])==LOW){
  Serial.print("RED");
  delay(500);
  Serial.print('\n');
  }
  break;

  case GREEN: 
  if(digitalRead(Arr[i])==LOW){
  Serial.print("GREEN");
  delay(500);
  Serial.print('\n');
  }
  break;

  case BLUE: 
  if(digitalRead(Arr[i])==LOW){
  Serial.print("BLUE");
  delay(500);
  Serial.print('\n');
  }
  break;

  case YELLOW: 
  if(digitalRead(Arr[i])==LOW){
  Serial.print("YELLOW");
  delay(500);
  Serial.print('\n');
  }
  break;
  }

  }
  }
