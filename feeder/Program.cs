using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Permissions;
using System.Text.RegularExpressions;
using System.Threading;

namespace feeder
{
    class Program
    {
        static void Main(string[] args)
        {
            Run();
        }

        //[PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
        private static void Run()
        {
            // Create a new FileSystemWatcher and set its properties.
            using (FileSystemWatcher watcher = new FileSystemWatcher())
            {
                watcher.Path = "c:\\csv\\logger\\";
                watcher.IncludeSubdirectories = true;
                // Watch for changes in LastAccess and LastWrite times, and
                // the renaming of files or directories.
                watcher.NotifyFilter = NotifyFilters.LastAccess
                                     | NotifyFilters.LastWrite
                                     | NotifyFilters.FileName
                                     | NotifyFilters.DirectoryName;

                // Only watch text files.
                watcher.Filter = "*.csv";

                // Add event handlers.
                watcher.Changed += OnChanged;
                watcher.Created += OnChanged;
                watcher.Deleted += OnDeleted;
                watcher.Renamed += OnRenamed;

                // Begin watching.
                watcher.EnableRaisingEvents = true;

                // Wait for the user to quit the program.
                Console.WriteLine("Press 'q' to quit the sample.");
                while (Console.Read() != 'q') ;
            }
        }
        // Define the event handlers.
        private static void OnChanged(object source, FileSystemEventArgs e)
        // Specify what is done when a file is changed, created, or deleted.
        {
            Console.WriteLine("OnChanged : " + e.Name);
            try
            {
                var time2 = DateTime.Now.ToString("MM/dd/yyyy HH:mm:ss");
                Console.WriteLine($"st {time2} File: {e.Name} {e.ChangeType} \r\n");
                if (File.Exists(e.FullPath))
                {
                    try
                    {
                        Console.WriteLine("wait : " + e.Name);
                        WaitForFile(e);
                        Console.WriteLine("done : " + e.Name);
                        //cutTxt(e);
                    }
                    catch (IOException ioEx)
                    {
                        string sourceFile = System.IO.Path.Combine(e.FullPath);
                        string destFile = System.IO.Path.Combine("./temp");
                        System.IO.File.Copy(sourceFile, destFile, true);
                        Console.WriteLine("can not file");
                    }
                    catch (Exception exc)
                    {
                        Console.WriteLine("can not use");
                        File.AppendAllText(Path.Combine("./errors.txt"), $"{exc.ToString()}");
                        //check here why it failed and ask user to retry if the file is in use.
                        return;
                    }
                }
            }
            catch (Exception exc)
            {
                Console.WriteLine($"{exc.ToString()}");
            }
        }

        private static void OnRenamed(object source, RenamedEventArgs e) =>
            // Specify what is done when a file is renamed.
            Console.WriteLine($"File: {e.OldFullPath} renamed to {e.FullPath}");
        private static void OnDeleted(object source, FileSystemEventArgs e) =>
            // Specify what is done when a file is renamed.
            Console.WriteLine($"File: {e.Name} Deleted");
        private static void WaitForFile(FileSystemEventArgs e)
        {
            while (true)
            {
                try
                {
                    //string tempFile = Path.GetTempFileName();
                    string tempFile = "C:\\csv\\done\\" + e.Name;
                    using (StreamReader stream = new StreamReader(e.FullPath))
                    {
                        using (var sw = new StreamWriter(tempFile))
                        {
                            string line;
                            sw.WriteLine(stream.ReadLine());
                            while ((line = stream.ReadLine()) != null)
                            {
                                if (!line.Contains("DataLog"))
                                    sw.WriteLine(line);
                            }

                            //File.Move(tempFile, "abc.abc");
                        }
                        stream.Close();
                        File.Delete(e.FullPath);
                        break;
                    }
                }
                catch
                {
                    Thread.Sleep(1000);
                }
            }
        }

        private static void cutTxt(FileSystemEventArgs e)
        {
            string tempFile = Path.GetTempFileName();
            using (var sr = new StreamReader(e.FullPath))
            using (var sw = new StreamWriter(tempFile))
            {
                int id = 1;
                string line;

                sw.WriteLine(sr.ReadLine());
                while ((line = sr.ReadLine()) != null)
                {
                    if (line != "DataLog" || id != 1)
                        sw.WriteLine(line);
                }
            }
            File.Delete(e.Name);
            File.Move(tempFile, "abc.abc");
        }
    }
}
