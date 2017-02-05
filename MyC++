//MyC++

class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        int ySize = matrix.size();
        int xSize = matrix[0].size();
        int currentMax;
        int maxUnderK = -32767; 
        for(int y = 0; y<ySize; y++)
        {
            for(int x = 0; x<xSize; x++)
            {
                int currentMax = findBiggestFromHere(x,y,matrix,k);
                if(currentMax > maxUnderK && currentMax <= k)
                {
                    if(currentMax == k)
                        return currentMax;
                    maxUnderK = currentMax;
                }
            }
        }
        return maxUnderK;
        
        
    }
    
    int findBiggestFromHere(int xStart, int yStart, vector<vector<int>>& matrix, int k){
        //cout << "\nxStart: " << xStart;
        int ySize = matrix.size();
        int xSize = matrix[0].size();
        
        int x = xStart, y = yStart;
        int currentMax = -32767;
        int lastSum = 0;
        int currentx = x+1, currenty = y+1;
        bool yboosted = true;
        while(y<ySize)
        {
            yboosted = true;
            while(x<xSize)
            {
                int yTraverse;
                if(yboosted)
                {
                    lastSum = 0;
                }
                for(yTraverse = yStart; yTraverse <= y; yTraverse++)
                {
                    lastSum += matrix[yTraverse][x];
                    //cout << "yLoopInner\n";
                }
                //cout << "\n" << lastSum;
                if(lastSum > currentMax && lastSum <= k)
                {
                    if(lastSum == k)
                        return lastSum;
                    currentMax = lastSum;
                    //cout << currentMax;
                }
                yboosted = false;
                x++;
                //cout << "xLoop\n";
            }
            y++;
            x = xStart; 
            //cout<< "yLoopOuter\n";
        }
        return currentMax;
    }

};