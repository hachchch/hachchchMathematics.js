class mathematics{
  sum(K,N,gen){
  let ans=0;
  for(let k=K;k<=N;++k){
    ans+=eval(gen);
  }
  return ans;
}
prod(K,N,gen,val){
  let ans=1;
  if(!val){
  for(let k=K;k<=N;++k){
    ans=ans*eval(gen);
  }
  }else{
  let syntax ="for(var "+val+"=K;"+val+"<=N;++"+val+"){ans=ans*eval(gen);}";
  eval(syntax);
  }
  return ans;
}
fact(a){
  if(a==Math.round(a)){
  return this.prod(1,a,"k");
  }else{
  return this.gamma(a+1);
  }
}
gamma(a,b){
  if(!b){
    b=100;
  }
  return this.int(0,b,"Math.pow(x,"+(a-1)+")*Math.exp(-x)",100000);
}
nPr(n,r){
  return this.fact(n)/this.fact(n-r);
}
nCr(n,r){
  return this.fact(n)/(this.fact(r)*this.fact(n-r));
}
mean(arr){
  let ans=0;
  for(let k=0;k<arr.length;++k){
    ans+=eval("arr[k]");
  }
  return ans/arr.length;
}
geomean(arr){
  let ans=1;
  for(let k=0;k<arr.length;++k){
    ans=ans*eval("arr[k]");
  }
  return Math.pow(ans,1/arr.length);
}
  median(arr){
    return (arr[Math.floor((arr.length-1)/2)]+arr[Math.ceil((arr.length-1)/2)])/2;
  }
  euler(term,x,y,h,f){
    let Yarray=[y];
    function F(x,y){
      return eval(f);
    }
    for(let n=1; n<=term; ++n){
      Yarray[n]=Yarray[n-1]+h*F(x,Yarray[n-1]);
      x+=h;
    }
    return Yarray[term];
  }
  trapezoidal(a,b,f,n){
    if(!n){
    n=10001;
    }
    function F(x){
      return eval(f);
    }
    let an=[a];
    for(let i=1; i<=n; ++i){
      an[i]=an[i-1]+((b-a)/n);
    }
    let ans=0;
    for(let k=1; k<=n; ++k){
      ans+=(an[k]-an[k-1])*(F(an[k])+F(an[k-1]))/2;
    }
    return ans;
  }
  int(a,b,f,mix){
    function F(x){
      return eval(f);
    }
    if(!mix){
    return ((b-a)/6)*(F(a)+4*F((a+b)/2)+F(b));
    }else{
    if(mix/2!=Math.ceil(mix/2)){
      mix=2*Math.ceil(mix/2);
    }
    let an=[0];
    let h=(b-a)/mix;
    for(let i=1; i<mix; ++i){
      an[i]=a+i*h;
    }
    let ans1=0;
    for(let i=1; i<=mix/2-1; ++i){
      ans1+=F(an[2*i]);
    }
    let ans2=0;
    for(let i=1; i<=mix/2; ++i){
      ans2+=F(an[2*i-1]);
    }
    return (h/3)*(F(a)+2*ans1+4*ans2+F(b));
    }
  }
}
