﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp9
{
    class Account 
    {
        public Account()
        {
            Console.WriteLine("Account Constructor");
        }
        public virtual void AccountName()
        {
            Console.WriteLine("Athisii");
        }
    }
    class Customer : Account
    {
        public override void AccountName()
        {
            Console.WriteLine("Kayina");
        }
    }
}
