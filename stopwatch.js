function Stopwatch()
{
    var sw = this;
    var start = null;
    var stop = null;
    var isRunning = false;
    
    sw.__defineGetter__("ElapsedMilliseconds", function()
    {
        return stop - start;
    });
    
    sw.__defineGetter__("IsRunning", function()
    {
        return isRunning;
    });
    
    sw.Start = function()
    {
        start = new Date();
        stop = null;
        isRunning = true;
    }
    
    sw.Stop = function()
    {
        stop = new Date();
        isRunning = false;
    }
    
    sw.Reset = function()
    {
        start = new Date();
        stop = null;
    }
    
    sw.Restart = function()
    {
        sw.Reset();
        isRunning = true;
    }
}
