#include<iostream>
using namespace std;
int main()
{
    int sp , cp;
    cin >> sp >> cp;
    cout << "enter the sp " << sp <<endl;
    cout << "enter the cp " << cp <<endl;
    if(sp>cp){
        cout << "profit" <<endl;
    }
    else if(sp<cp){
        cout << "loss" <<endl;
    }
    else if(sp=cp){
        cout << "equal" <<endl;
    }
    else
    cout << "nice"<<endl;
return 0;
}