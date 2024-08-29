class mathematics{
  sum(K,N,gen){
  let ans=0;
  for(k=K;k<=N;++k){
    ans+=eval(gen);
  }
  return ans;
}
prod(K,N,gen){
  let ans=1;
  for(k=K;k<=N;++k){
    ans=ans*eval(gen);
  }
  return ans;
}
fact(N){
  return prod(1,N,"k");
}
nPr(n,r){
  return fact(n)/fact(n-r);
}
nCr(n,r){
  return fact(n)/(fact(r)*fact(n-r));
}
mean(arr){
  let ans=0;
  for(k=0;k<arr.length;++k){
    ans+=eval("arr[k]");
  }
  return ans/arr.length;
}
geomean(arr){
  let ans=1;
  for(k=0;k<arr.length;++k){
    ans=ans*eval("arr[k]");
  }
  return Math.pow(ans,1/arr.length);
}
}
