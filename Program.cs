using System;
using DP.net.singleton;

namespace DP.net
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Singleton
            Singleton s1 = Singleton.GetInstance();
            Singleton s2 = Singleton.GetInstance();
            if (s1 == s2)
            {
                System.Console.WriteLine("Singleton works! ");
            }
            else
            {
                System.Console.WriteLine("Singleton not work");
            }
            s2.DoWork();

            #endregion
        

        }
    }
}
