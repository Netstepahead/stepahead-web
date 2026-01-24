import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  isPhoto?: boolean
  photoIndex?: number
}

export function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const nodesRef = useRef<Node[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr); 
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodeCount = 45 // קצת יותר נקודות רקע לצפיפות
    
    // **עדכון קואורדינטות בהתאם ל-PhotoCollage החדש (מרוכז יותר)**
    // הערכים הם בין 0 ל-1 (כאשר 0.5 זה האמצע)
    const photoPositions = [
      { x: 0.20, y: 0.20 }, // Top Left (התכנס פנימה)
      { x: 0.75, y: 0.15 }, // Top Right (התכנס פנימה)
      { x: 0.10, y: 0.50 }, // Middle Left
      { x: 0.85, y: 0.48 }, // Middle Right
      { x: 0.40, y: 0.80 }, // Bottom Center (עלה למעלה)
    ]

    nodesRef.current = []

    // 1. נקודות עוגן לתמונות
    photoPositions.forEach((pos, i) => {
      nodesRef.current.push({
        x: pos.x * (canvas.width / (window.devicePixelRatio || 1)),
        y: pos.y * (canvas.height / (window.devicePixelRatio || 1)),
        vx: (Math.random() - 0.5) * 0.1, 
        vy: (Math.random() - 0.5) * 0.1,
        radius: 8,
        isPhoto: true,
        photoIndex: i,
      })
    })

    // 2. נקודות רקע
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push({
        x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
        y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
      })
    }

    const animate = () => {
      const logicalWidth = canvas.width / (window.devicePixelRatio || 1);
      const logicalHeight = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // --- עדכון מיקומים ---
      nodesRef.current.forEach((node) => {
        if (!node.isPhoto) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > logicalWidth) node.vx *= -1
          if (node.y < 0 || node.y > logicalHeight) node.vy *= -1
        } else {
             const time = Date.now() / 2000;
             node.x += Math.sin(time) * 0.05;
             node.y += Math.cos(time) * 0.05;
        }
      })

      // --- ציור קווים ---
      const connectionDistance = 220 // הגדלתי טווח חיבור כדי שיהיו יותר קווים במרכז
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach((otherNode) => {
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5
            
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)

            if (node.isPhoto || otherNode.isPhoto) {
              ctx.strokeStyle = `rgba(232, 119, 34, ${opacity * 0.7})` 
              ctx.lineWidth = 1.2
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`
              ctx.lineWidth = 0.8
            }
            ctx.stroke()
          }
        })
      })

      // --- ציור הנקודות ---
      nodesRef.current.forEach((node) => {
        if (node.isPhoto) {
          // הילה כתומה
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2.5);
          gradient.addColorStop(0, "rgba(232, 119, 34, 0.2)");
          gradient.addColorStop(1, "rgba(232, 119, 34, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#E87722"
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.5)" 
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}