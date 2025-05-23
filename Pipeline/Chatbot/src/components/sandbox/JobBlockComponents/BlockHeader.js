const BlockHeader = ({ blockType, status, onDeleteBlock }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'running': return 'bg-blue-500 animate-pulse';
        case 'completed': return 'bg-green-500';
        case 'failed': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    };
  
    const getStatusText = () => {
      switch (status) {
        case 'running': return 'Running...';
        case 'completed': return 'Completed';
        case 'failed': return 'Failed';
        default: return 'Idle';
      }
    };
  
    return (
      <div className="drag-handle p-2 rounded-t-lg cursor-move flex justify-between items-center backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <h4 className="text-white font-bold text-sm tracking-wide">{blockType.name}</h4>
          <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
          <span className="text-white/60 text-xs">{getStatusText()}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onDeleteBlock}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            title="Delete block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  export default BlockHeader;