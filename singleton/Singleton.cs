namespace DP.net.singleton
{
    public class Singleton
    {

        private static Singleton instance;

        private static readonly object key = new object();

        public static Singleton GetInstance()
        {
            if (instance == null)
            {
                lock (key)
                {
                    if (instance == null)
                    {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }

        private Singleton()
        {
            // ... code to initialize the object
        }

        public void DoWork()
        {
            // here we perform actions which the singleton class does
            // for example - manage db connections, logger, timer, etc.
        }
    }
}