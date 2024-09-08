#include<iostream>
using namespace std;
int main()
{
    int marks;
    cin >> marks;
    if(marks > 30)
    {
        cout << "pass" <<endl;
    }
    else
    {
        cout << "fail" <<endl;
    }
    marks >30 ? cout << "pass" <<endl : cout << "fail" <<endl;
    return 0;
}