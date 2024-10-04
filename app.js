for (let i = 1; i <= 50; i++) {
  switch(i){
    case 10:
      console.log('今'　+ i + '回ループしました。');
      break;
    case 20:
      console.log('今'　+ i + '回ループしました。');
      break;
    case 30:
      console.log('今'　+ i + '回ループしました。');
      break;
    case 40:
      console.log('今'　+ i + '回ループしました。');
      break;
    case 50:
      console.log('今'　+ i + '回ループしました。');
      alert(i+'回カウントが終わりました。');
      break;
  }
  if( i % 4 == 0 ){
     console.log('4で割れる数です。' + i);
  }
}
