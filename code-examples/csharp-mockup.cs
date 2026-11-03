// Mockup for checking C# highlighting with semantic highlighting on and off (#84).
// Access keywords, control keywords, booleans/null and method calls should all be distinguishable.
using System;
using System.Collections.Generic;
using System.Linq;

namespace Gruvbox.Mockup
{
    public enum Status { Active, Disabled }

    public interface IGreeter
    {
        string Greet(string name);
    }

    internal sealed record Person(string Name, int Age);

    public delegate void Notify(string message);

    public abstract class Base
    {
        protected virtual void OnChanged() { }
    }

    /// <summary>Greets people.</summary>
    /// <param name="prefix">Text put before the name.</param>
    public class Greeter<T> : Base, IGreeter where T : class
    {
        private const int MaxLength = 32;
        private static readonly string[] Names = { "Alice", "Bob" };
        private readonly string _prefix;
        private bool _enabled = true;
        private object? _state = null;

        public event Notify? Changed;

        public Greeter(string prefix)
        {
            this._prefix = prefix;
            base.OnChanged();
        }

        public string Prefix => _prefix;

        public bool Enabled
        {
            get { return _enabled; }
            set { _enabled = value; OnChanged(); }
        }

        public string Greet(string name)
        {
            if (!_enabled || name is null)
            {
                return string.Empty;
            }

            var result = $"{_prefix}, {name.Trim()}!";
            Changed?.Invoke(result);
            return result.Length > MaxLength ? result[..MaxLength] : result;
        }

        public async System.Threading.Tasks.Task<int> CountAsync(IEnumerable<Person> people)
        {
            await System.Threading.Tasks.Task.Delay(10);
            int total = 0;
            foreach (var person in people.Where(p => p.Age >= 18))
            {
                switch (person.Name)
                {
                    case "Alice":
                        total += 2;
                        break;
                    default:
                        total++;
                        continue;
                }
            }

            try
            {
                checked { total *= 1_000; }
            }
            catch (OverflowException ex) when (ex.Message != null)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
            finally
            {
                _state = false;
            }

            return total;
        }

        protected override void OnChanged() => Console.WriteLine(Names.First());

        public static void Main(string[] args)
        {
            var greeter = new Greeter<object>("Hello");
            const double ratio = 0.5d;
            Console.WriteLine(greeter.Greet(args.Length > 0 ? args[0] : "World"));
            Console.WriteLine(@"C:\verbatim\path" + "\t" + ratio + Status.Active);
            Console.WriteLine(typeof(T).Name + nameof(greeter) + default(int));
        }
    }
}
